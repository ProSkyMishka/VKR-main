import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz006-step: \(step)").font(.headline)
            if step == 1 { Text("wz006-intro") }
            if step == 2 { Text("wz006-second") }
            if step == 3 { Text("wz006-finish") }
            HStack {
                Button("wz006-back") { if step > 1 { step -= 1 } }
                Button("wz006-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
