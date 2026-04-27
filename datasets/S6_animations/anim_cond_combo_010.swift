import SwiftUI

struct ContentView: View {
    @State private var open = false
    var body: some View {
        VStack {
            if open {
                Text("acc010-shown")
                    .scaleEffect(1.2)
                    .transition(.scale.combined(with: .opacity))
            } else {
                Text("acc010-hidden")
                    .foregroundColor(.gray)
            }
            Button("acc010-flip") {
                withAnimation(.easeInOut) { open.toggle() }
            }
        }
        .padding()
    }
}
