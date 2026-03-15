import SwiftUI

struct SliderView: View {
    @Binding var value: Double

    var body: some View {
        VStack {
            Text("\(value, specifier: "%.1f")")
            Slider(value: $value, in: 0...100)
        }
    }
}

struct ContentView: View {
    @State private var value: Double = 50

    var body: some View {
        SliderView(value: $value)
    }
}
