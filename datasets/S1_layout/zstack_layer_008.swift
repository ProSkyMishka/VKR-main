import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(12)
                .frame(width: 128, height: 68)
            VStack(spacing: 4) {
                Text("zl008-back")
                    .font(.caption)
                Text("zl008-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
