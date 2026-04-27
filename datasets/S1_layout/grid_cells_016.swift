import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 6) {
            HStack(spacing: 6) {
                Text("gc016-r1c1")
                    .font(.caption)
                    .padding(4)
                    .frame(width: 56, height: 32)
                    .background(Color(white: 0.95))
                    .cornerRadius(6)
                Text("gc016-r1c2")
                    .font(.caption)
                    .padding(4)
                    .frame(width: 56, height: 32)
                    .background(Color(white: 0.95))
                    .cornerRadius(6)
                Text("gc016-r1c3")
                    .font(.caption)
                    .padding(4)
                    .frame(width: 56, height: 32)
                    .background(Color(white: 0.95))
                    .cornerRadius(6)
            }
            HStack(spacing: 6) {
                Text("gc016-r2c1")
                    .font(.caption)
                    .padding(4)
                    .frame(width: 56, height: 32)
                    .background(Color(white: 0.95))
                    .cornerRadius(6)
                Text("gc016-r2c2")
                    .font(.caption)
                    .padding(4)
                    .frame(width: 56, height: 32)
                    .background(Color(white: 0.95))
                    .cornerRadius(6)
                Text("gc016-r2c3")
                    .font(.caption)
                    .padding(4)
                    .frame(width: 56, height: 32)
                    .background(Color(white: 0.95))
                    .cornerRadius(6)
            }
        }
        .padding()
    }
}
