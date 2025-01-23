'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type MaterialType = 'aluminum' | 'steel' | 'copper'

interface MaterialRates {
  aluminum: number
  steel: number
  copper: number
}

const materialRates: MaterialRates = {
  aluminum: 200, // Price per kg
  steel: 150,
  copper: 700
}

export default function MaterialCalculator() {
  const [material, setMaterial] = useState<MaterialType>('aluminum')
  const [dimensions, setDimensions] = useState({
    length: 0,
    width: 0,
    height: 0,
    quantity: 1
  })

  const calculateVolume = () => {
    return (dimensions.length * dimensions.width * dimensions.height) / 1000000 // Convert to m³
  }

  const calculateWeight = () => {
    const densities = {
      aluminum: 2.7, // g/cm³
      steel: 7.85,
      copper: 8.96
    }
    return calculateVolume() * densities[material] * dimensions.quantity
  }

  const calculateCost = () => {
    return calculateWeight() * materialRates[material]
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Material Calculator</h2>
          <p className="mt-4 text-xl text-gray-600">
            Calculate material requirements and costs
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Material Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Material Type
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value as MaterialType)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="aluminum">Aluminum</option>
                <option value="steel">Steel</option>
                <option value="copper">Copper</option>
              </select>
            </div>

            {/* Dimensions */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Length (mm)
                </label>
                <input
                  type="number"
                  value={dimensions.length}
                  onChange={(e) => setDimensions(prev => ({ ...prev, length: parseFloat(e.target.value) }))}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Width (mm)
                </label>
                <input
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => setDimensions(prev => ({ ...prev, width: parseFloat(e.target.value) }))}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (mm)
                </label>
                <input
                  type="number"
                  value={dimensions.height}
                  onChange={(e) => setDimensions(prev => ({ ...prev, height: parseFloat(e.target.value) }))}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  value={dimensions.quantity}
                  onChange={(e) => setDimensions(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Calculation Results</h3>
            <div className="space-y-2">
              <p>Volume: {calculateVolume().toFixed(2)} m³</p>
              <p>Weight: {calculateWeight().toFixed(2)} kg</p>
              <p>Estimated Cost: ₹{calculateCost().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}