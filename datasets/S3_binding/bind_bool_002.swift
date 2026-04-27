import SwiftUI

struct Childbb002: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb002-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb002(isOn: $on)
            Text(on ? "bb002-on" : "bb002-off").font(.headline)
        }
        .padding()
    }
}
