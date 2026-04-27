import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(15)
                .frame(width: 131, height: 71)
            VStack(spacing: 4) {
                Text("zl011-back")
                    .font(.caption)
                Text("zl011-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
