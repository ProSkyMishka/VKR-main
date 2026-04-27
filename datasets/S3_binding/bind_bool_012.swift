import SwiftUI

struct Childbb012: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb012-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb012(isOn: $on)
            Text(on ? "bb012-on" : "bb012-off").font(.headline)
        }
        .padding()
    }
}
