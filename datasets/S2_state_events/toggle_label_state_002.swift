import SwiftUI

struct ContentView: View {
    @State private var on = false

    var body: some View {
        VStack(spacing: 10) {
            Toggle("tl002-switch", isOn: $on)
                .padding(.horizontal)
            Text(on ? "tl002-on" : "tl002-off")
                .font(.headline)
                .foregroundColor(on ? .green : .gray)
        }
        .padding()
    }
}
