import SwiftUI

struct ContentView: View {
    @State private var on = false

    var body: some View {
        VStack(spacing: 10) {
            Toggle("tl011-switch", isOn: $on)
                .padding(.horizontal)
            Text(on ? "tl011-on" : "tl011-off")
                .font(.headline)
                .foregroundColor(on ? .green : .gray)
        }
        .padding()
    }
}
