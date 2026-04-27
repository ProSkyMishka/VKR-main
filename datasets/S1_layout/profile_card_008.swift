import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc008-name")
                    .font(.title2)
                    .bold()
                Text("pc008-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc008-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc008-posts"); Text("\(18)").bold() }
                VStack { Text("pc008-followers"); Text("\(108)").bold() }
                VStack { Text("pc008-likes"); Text("\(1008)").bold() }
            }
        }
        .padding()
    }
}
