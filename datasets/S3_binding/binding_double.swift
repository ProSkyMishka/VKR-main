import SwiftUI
struct SliderLabel: View {
    @Binding var value: Double
    var body: some View {
        VStack {
            Slider(value: $value, in: 0...1)
            Text(String(format: "%.2f", value))
        }
    }
}
struct ContentView: View {
    @State private var value: Double = 0.5
    var body: some View { SliderLabel(value: $value).padding() }
}
